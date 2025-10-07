package middleware

import (
	"github.com/SemalFernando/go-fiber-app/config" // adjust import path accordingly
	"github.com/gofiber/fiber/v2"
	"go.uber.org/zap"
)

func ErrorHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		err := c.Next()
		if err != nil {
			config.Logger.Error("Unhandled Error", zap.Error(err))
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error":   "Internal Server Error",
				"message": err.Error(),
			})
		}
		return nil
	}
}
