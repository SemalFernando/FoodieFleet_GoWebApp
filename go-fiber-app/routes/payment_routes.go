package routes

import (
	"github.com/SemalFernando/go-fiber-app/handler"
	"github.com/SemalFernando/go-fiber-app/repository"
	"github.com/SemalFernando/go-fiber-app/service"
	"github.com/gofiber/fiber/v2"
)

func PaymentRoutes(app *fiber.App) {
	repo := repository.NewPaymentRepository()
	svc := service.NewPaymentService(repo)
	h := handler.NewPaymentHandler(svc)

	payment := app.Group("/payments")

	payment.Post("/", h.Create)
	payment.Get("/:id", h.Get)
	payment.Put("/:id", h.Update)
	payment.Delete("/:id", h.Delete)
}
