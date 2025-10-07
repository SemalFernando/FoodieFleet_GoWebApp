package config

import (
	"os"
	"strconv"
)

type Config struct {
	Port      string
	MongoURI  string
	MongoDB   string
	JWTSecret string
	JWTExpiry int // in hours
}

func LoadConfig() *Config {
	expiry, _ := strconv.Atoi(os.Getenv("JWT_EXPIRY"))
	if expiry == 0 {
		expiry = 72 // default 72 hours
	}

	return &Config{
		Port:      getEnv("PORT", "8080"),
		MongoURI:  getEnv("MONGO_URI", "mongodb://localhost:27017"),
		MongoDB:   getEnv("MONGO_DB", "go_fiber_app"),
		JWTSecret: getEnv("JWT_SECRET", ""),
		JWTExpiry: expiry,
	}
}

func getEnv(key, defaultValue string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return defaultValue
}
