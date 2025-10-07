package config

import (
	"time"

	"go.uber.org/zap"
)

var Logger *zap.Logger

func InitializeLogger() error {
	logger, err := zap.NewProduction()
	if err != nil {
		return err
	}
	Logger = logger
	return nil
}

func LogStartupMessage() {
	Logger.Info("Application started",
		zap.String("status", "running"),
		zap.Time("start_time", time.Now()),
	)
}

// Optional convenience function:
func InitLoggerAndLogStart() error {
	if err := InitializeLogger(); err != nil {
		return err
	}
	LogStartupMessage()
	return nil
}
