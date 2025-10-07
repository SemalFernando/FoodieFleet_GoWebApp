package handler

import (
	"github.com/SemalFernando/go-fiber-app/model"
	"github.com/SemalFernando/go-fiber-app/service"
	"github.com/gofiber/fiber/v2"
)

type PaymentHandler struct {
	service *service.PaymentService
}

func NewPaymentHandler(s *service.PaymentService) *PaymentHandler {
	return &PaymentHandler{service: s}
}

func (h *PaymentHandler) Create(c *fiber.Ctx) error {
	var payment model.Payment
	if err := c.BodyParser(&payment); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid input"})
	}
	result, err := h.service.CreatePayment(&payment)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": err.Error()})
	}
	return c.Status(fiber.StatusCreated).JSON(result)
}

func (h *PaymentHandler) Get(c *fiber.Ctx) error {
	id := c.Params("id")
	result, err := h.service.GetPaymentByID(id)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": err.Error()})
	}
	return c.Status(fiber.StatusOK).JSON(result)
}

func (h *PaymentHandler) Update(c *fiber.Ctx) error {
	id := c.Params("id")
	var payment model.Payment
	if err := c.BodyParser(&payment); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid input"})
	}
	updated, err := h.service.UpdatePayment(id, &payment)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": err.Error()})
	}
	return c.Status(fiber.StatusOK).JSON(updated)
}

func (h *PaymentHandler) Delete(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := h.service.DeletePayment(id); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": err.Error()})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{"message": "Payment deleted"})
}
