package service

import (
	"github.com/SemalFernando/go-fiber-app/model"
	"github.com/SemalFernando/go-fiber-app/repository"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

type ProductService struct {
	repo *repository.ProductRepository
}

func NewProductService(repo *repository.ProductRepository) *ProductService {
	return &ProductService{repo: repo}
}

func (s *ProductService) CreateProduct(p *model.Product) (*model.Product, error) {
	validate := validator.New()
	if err := validate.Struct(p); err != nil {
		return nil, fiber.NewError(fiber.StatusBadRequest, err.Error())
	}
	return s.repo.Create(p)
}

func (s *ProductService) GetProductByID(id string) (*model.Product, error) {
	product, err := s.repo.GetByID(id)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}
	if product == nil {
		return nil, fiber.NewError(fiber.StatusNotFound, "Product not found")
	}
	return product, nil
}

func (s *ProductService) UpdateProduct(id string, data *model.Product) (*model.Product, error) {
	product, err := s.repo.GetByID(id)
	if err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}
	if product == nil {
		return nil, fiber.NewError(fiber.StatusNotFound, "Product not found")
	}

	product.Name = data.Name
	product.Description = data.Description
	product.Price = data.Price

	if err := s.repo.Update(product); err != nil {
		return nil, fiber.NewError(fiber.StatusInternalServerError, "Failed to update product")
	}
	return product, nil
}

func (s *ProductService) DeleteProduct(id string) error {
	return s.repo.Delete(id)
}
