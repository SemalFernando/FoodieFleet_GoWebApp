package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Product struct {
	ID          primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Name        string             `json:"name" bson:"name" validate:"required,min=2"`
	Description string             `json:"description" bson:"description"`
	Price       float64            `json:"price" bson:"price" validate:"required,gt=0"`
	ImageURL    string             `json:"image_url,omitempty" bson:"image_url,omitempty"` // URL to the image
}
