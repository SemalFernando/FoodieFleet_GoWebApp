package service

import (
	"time"

	"github.com/SemalFernando/go-fiber-app/model"
	"github.com/SemalFernando/go-fiber-app/repository"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

type PaymentService struct {
	repo *repository.PaymentRepository
}

func NewPaymentService(repo *repository.PaymentRepository) *PaymentService {
	return &PaymentService{repo: repo}
}

func (s *PaymentService) CreatePayment(p *model.Payment) (*model.Payment, error) {
	validate := validator.New()
	if err := validate.Struct(p); err != nil {
		return nil, fiber.NewError(fiber.StatusBadRequest, err.Error())
	}
	p.CreatedAt = time.Now().Unix()
	p.Status = "Pending"
	return s.repo.Create(p)
}

func (s *PaymentService) GetPaymentByID(id string) (*model.Payment, error) {
	p, err := s.repo.GetByID(id)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}
	if p == nil {
		return nil, fiber.NewError(fiber.StatusNotFound, "Payment not found")
	}
	return p, nil
}

func (s *PaymentService) UpdatePayment(id string, input *model.Payment) (*model.Payment, error) {
	existing, err := s.repo.GetByID(id)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}
	if existing == nil {
		return nil, fiber.NewError(fiber.StatusNotFound, "Payment not found")
	}
	existing.Amount = input.Amount
	existing.Method = input.Method
	existing.Status = input.Status

	err = s.repo.Update(existing)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}
	return existing, nil
}

func (s *PaymentService) DeletePayment(id string) error {
	return s.repo.Delete(id)
}
