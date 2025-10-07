package utils

import (
	"errors"
	"fmt"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

func GenerateJWT(email string) (string, error) {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		return "", errors.New("JWT_SECRET not set")
	}

	claims := jwt.MapClaims{
		"email": email,
		"exp":   time.Now().Add(time.Hour * 72).Unix(), // 3 days
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte(secret))
}

func ValidateJWT(tokenString string) (*jwt.Token, error) {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		fmt.Println("JWT_SECRET is missing from .env")
		return nil, errors.New("JWT_SECRET not set")
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			fmt.Println("Unexpected signing method:", token.Header["alg"])
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(secret), nil
	})

	if err != nil {
		fmt.Println("Token parse error:", err)
		return nil, err
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		fmt.Println("Invalid token or claims.")
		return nil, errors.New("invalid token or claims")
	}

	expVal, ok := claims["exp"]
	if !ok {
		fmt.Println("Missing expiration in claims.")
		return nil, errors.New("missing expiration")
	}

	expFloat, ok := expVal.(float64)
	if !ok {
		fmt.Println("Expiration is not float64:", expVal)
		return nil, errors.New("invalid expiration type")
	}

	if time.Now().Unix() > int64(expFloat) {
		fmt.Println("Token is expired. Now:", time.Now().Unix(), " Exp:", int64(expFloat))
		return nil, errors.New("token expired")
	}

	fmt.Println("JWT is valid. Email claim:", claims["email"])
	return token, nil
}
