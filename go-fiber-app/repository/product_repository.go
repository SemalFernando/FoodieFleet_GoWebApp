package repository

import (
	"context"
	"errors"

	"github.com/SemalFernando/go-fiber-app/config"
	"github.com/SemalFernando/go-fiber-app/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.uber.org/zap"
)

type ProductRepository struct {
	collectionName string
}

func NewProductRepository() *ProductRepository {
	return &ProductRepository{
		collectionName: "products",
	}
}

func (r *ProductRepository) Create(product *model.Product) (*model.Product, error) {
	product.ID = primitive.NewObjectID()
	collection := config.GetCollection(r.collectionName)
	_, err := collection.InsertOne(context.Background(), product)
	if err != nil {
		config.Logger.Error("Failed to insert product", zap.Error(err))
		return nil, err
	}
	return product, nil
}

func (r *ProductRepository) GetByID(id string) (*model.Product, error) {
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	var product model.Product
	collection := config.GetCollection(r.collectionName)
	err = collection.FindOne(context.Background(), bson.M{"_id": objectID}).Decode(&product)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil
		}
		return nil, err
	}
	return &product, nil
}

func (r *ProductRepository) Update(product *model.Product) error {
	filter := bson.M{"_id": product.ID}
	update := bson.M{
		"$set": bson.M{
			"name":        product.Name,
			"description": product.Description,
			"price":       product.Price,
		},
	}
	collection := config.GetCollection(r.collectionName)
	_, err := collection.UpdateOne(context.Background(), filter, update)
	return err
}

func (r *ProductRepository) Delete(id string) error {
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	collection := config.GetCollection(r.collectionName)
	_, err = collection.DeleteOne(context.Background(), bson.M{"_id": objectID})
	return err
}
