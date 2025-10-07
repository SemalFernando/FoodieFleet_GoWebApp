package repository

import (
	"context"
	"errors"

	"github.com/SemalFernando/go-fiber-app/config"
	"github.com/SemalFernando/go-fiber-app/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type PaymentRepository struct {
	collectionName string
}

func NewPaymentRepository() *PaymentRepository {
	return &PaymentRepository{collectionName: "payments"}
}

func (r *PaymentRepository) Create(payment *model.Payment) (*model.Payment, error) {
	payment.ID = primitive.NewObjectID()
	_, err := config.GetCollection(r.collectionName).InsertOne(context.Background(), payment)
	if err != nil {
		return nil, err
	}
	return payment, nil
}

func (r *PaymentRepository) GetByID(id string) (*model.Payment, error) {
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	var payment model.Payment
	err = config.GetCollection(r.collectionName).FindOne(context.Background(), bson.M{"_id": objID}).Decode(&payment)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil
		}
		return nil, err
	}
	return &payment, nil
}

func (r *PaymentRepository) Update(payment *model.Payment) error {
	filter := bson.M{"_id": payment.ID}
	update := bson.M{"$set": bson.M{
		"amount": payment.Amount,
		"method": payment.Method,
		"status": payment.Status,
	}}
	_, err := config.GetCollection(r.collectionName).UpdateOne(context.Background(), filter, update)
	return err
}

func (r *PaymentRepository) Delete(id string) error {
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	_, err = config.GetCollection(r.collectionName).DeleteOne(context.Background(), bson.M{"_id": objID})
	return err
}
