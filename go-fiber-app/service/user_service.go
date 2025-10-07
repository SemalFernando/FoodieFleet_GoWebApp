package service

import (
	"strings"

	"github.com/SemalFernando/go-fiber-app/model"
	"github.com/SemalFernando/go-fiber-app/repository"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

type UserService struct {
	repo *repository.UserRepository
}

func NewUserService(repo *repository.UserRepository) *UserService {
	return &UserService{repo: repo}
}

func (s *UserService) CreateUser(user *model.User) (*model.User, error) {
	user.Email = strings.ToLower(user.Email)

	// Validate
	validate := validator.New()
	if err := validate.Struct(user); err != nil {
		return nil, fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	// Check existing user
	existingUser, err := s.repo.GetByEmail(user.Email)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, "Database error")
	}
	if existingUser != nil {
		return nil, fiber.NewError(fiber.StatusConflict, "User already exists")
	}

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, "Failed to hash password")
	}
	user.Password = string(hashedPassword)

	createdUser, err := s.repo.Create(user)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, "Failed to create user")
	}

	createdUser.Password = ""
	return createdUser, nil
}

func (s *UserService) GetUserByEmail(email string) (*model.User, error) {
	email = strings.ToLower(email)

	user, err := s.repo.GetByEmail(email)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, "Database error")
	}
	if user == nil {
		return nil, fiber.NewError(fiber.StatusNotFound, "User not found")
	}

	return user, nil
}

func (s *UserService) UpdateUser(email string, updateData map[string]interface{}) (*model.User, error) {
	email = strings.ToLower(email)

	user, err := s.repo.GetByEmail(email)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, "Database error")
	}
	if user == nil {
		return nil, fiber.NewError(fiber.StatusNotFound, "User not found")
	}

	// Handle update fields
	if name, ok := updateData["name"].(string); ok && name != "" {
		user.Name = name
	}
	if pwd, ok := updateData["password"].(string); ok && pwd != "" {
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(pwd), bcrypt.DefaultCost)
		if err != nil {
			return nil, fiber.NewError(fiber.StatusInternalServerError, "Failed to hash password")
		}
		user.Password = string(hashedPassword)
	}

	err = s.repo.UpdateUser(user)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, "Failed to update user")
	}

	user.Password = ""
	return user, nil
}

func (s *UserService) DeleteUser(email string) error {
	email = strings.ToLower(email)

	user, err := s.repo.GetByEmail(email)
	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, "Database error")
	}
	if user == nil {
		return fiber.NewError(fiber.StatusNotFound, "User not found")
	}

	err = s.repo.DeleteUser(email)
	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, "Failed to delete user")
	}

	return nil
}
