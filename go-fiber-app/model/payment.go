package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Payment struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserID    primitive.ObjectID `json:"userId" bson:"userId" validate:"required"`
	Amount    float64            `json:"amount" bson:"amount" validate:"required,gt=0"`
	Method    string             `json:"method" bson:"method" validate:"required"`
	Status    string             `json:"status" bson:"status"` // e.g. Pending, Completed, Failed
	CreatedAt int64              `json:"createdAt" bson:"createdAt"`
}
