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

type UserRepository struct {
	collection *mongo.Collection
}

func NewUserRepository() *UserRepository {
	return &UserRepository{
		collection: config.GetCollection("users"),
	}
}

func (r *UserRepository) Create(user *model.User) (*model.User, error) {
	user.ID = primitive.NewObjectID()
	result, err := r.collection.InsertOne(context.Background(), user)
	if err != nil {
		config.Logger.Error("Failed to insert user into database", zap.Error(err))
		return nil, err
	}
	user.ID = result.InsertedID.(primitive.ObjectID)
	return user, nil
}

func (r *UserRepository) GetByEmail(email string) (*model.User, error) {
	var user model.User
	err := r.collection.FindOne(context.Background(), bson.M{"email": email}).Decode(&user)

	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil
		}
		config.Logger.Error("Failed to find user by email", zap.String("email", email), zap.Error(err))
		return nil, err
	}
	return &user, nil
}

func (r *UserRepository) UpdateUser(user *model.User) error {
	filter := bson.M{"email": user.Email}
	update := bson.M{
		"$set": bson.M{
			"name":     user.Name,
			"password": user.Password,
		},
	}
	_, err := r.collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		config.Logger.Error("Failed to update user", zap.Error(err))
		return err
	}
	return nil
}

func (r *UserRepository) DeleteUser(email string) error {
	_, err := r.collection.DeleteOne(context.Background(), bson.M{"email": email})
	if err != nil {
		config.Logger.Error("Failed to delete user", zap.Error(err))
		return err
	}
	return nil
}
