package routes

import (
	"github.com/SemalFernando/go-fiber-app/handler"
	"github.com/SemalFernando/go-fiber-app/middleware"
	"github.com/SemalFernando/go-fiber-app/repository"
	"github.com/SemalFernando/go-fiber-app/service"
	"github.com/gofiber/fiber/v2"
)

func UserRoutes(app *fiber.App) {
	userRepo := repository.NewUserRepository()
	userService := service.NewUserService(userRepo)
	userHandler := handler.NewUserHandler(userService)

	// Public route for homepage
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Welcome to the Home Page!",
		})
	})

	// Public routes (no authentication required)
	user := app.Group("/users")
	user.Post("/register", userHandler.CreateUser) // Register
	user.Post("/login", userHandler.Login)         // Login

	// Protected routes (require JWT)
	user.Get("/:email", middleware.JWTProtected(), userHandler.GetUser)       // Get profile
	user.Patch("/:email", middleware.JWTProtected(), userHandler.UpdateUser)  // Update profile
	user.Delete("/:email", middleware.JWTProtected(), userHandler.DeleteUser) // Delete profile
}
