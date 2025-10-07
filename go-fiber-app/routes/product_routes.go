package routes

import (
	"github.com/SemalFernando/go-fiber-app/handler"
	"github.com/SemalFernando/go-fiber-app/repository"
	"github.com/SemalFernando/go-fiber-app/service"
	"github.com/gofiber/fiber/v2"
)

func ProductRoutes(app *fiber.App) {
	repo := repository.NewProductRepository()
	svc := service.NewProductService(repo)
	h := handler.NewProductHandler(svc)

	product := app.Group("/products")

	product.Post("/", h.Create)
	product.Get("/:id", h.Get)
	product.Put("/:id", h.Update)
	product.Delete("/:id", h.Delete)
}
