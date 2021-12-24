package shortener

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNotFound(t *testing.T) {
	repo := NewMockRepository()
	service := NewRedirectService(repo)
	_, err := service.Find("abc")

	assert.ErrorIs(t, err, ErrRedirectNotFound)
}

func TestStoreAndFind(t *testing.T) {
	repo := NewMockRepository()
	service := NewRedirectService(repo)

	redirect := Redirect{
		URL: "http://google.com",
	}
	err := service.Store(&redirect)
	assert.Nil(t, err)

	res, err := service.Find(redirect.Code)
	assert.Nil(t, err)
	assert.Equal(t, redirect.URL, res.URL)
}

func TestInvalid(t *testing.T) {
	repo := NewMockRepository()
	service := NewRedirectService(repo)

	redirect := Redirect{
		URL: "google.com",
	}

	err := service.Store(&redirect)
	assert.ErrorIs(t, err, ErrRedirectInvalid)

	_, err = service.Find(redirect.Code)
	assert.ErrorIs(t, err, ErrRedirectNotFound)
}
