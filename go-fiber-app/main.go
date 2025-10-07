package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"

	"github.com/SemalFernando/go-fiber-app/config"
	"github.com/SemalFernando/go-fiber-app/middleware"
	"github.com/SemalFernando/go-fiber-app/routes"
)

func main() {

	// Initialize logger
	config.InitializeLogger()
	defer config.Logger.Sync()

	//starting Go Fiber web server
	app := fiber.New()

	// Connect to MongoDB
	config.ConnectDB()

	// Config
	app.Use(logger.New())

	// Error handler middleware
	app.Use(middleware.ErrorHandler())

	// Routes
	routes.UserRoutes(app)
	routes.ProductRoutes(app)
	routes.PaymentRoutes(app)

	// Example logging (corrected)
	if err := config.InitLoggerAndLogStart(); err != nil {
		log.Fatalf("Failed to initialize logger: %v", err)
	}

	// Start server
	log.Fatal(app.Listen(":8080"))
}
