package shortener

import (
	"github.com/pkg/errors"
)

type RedirectRepository interface {
	Find(code string) (*Redirect, error)
	Store(redirect *Redirect) error
}

type mockRepository struct {
	redirects map[string]*Redirect
}

// NewMockRepository creates an in memory repository. For testing
func NewMockRepository() RedirectRepository {
	return &mockRepository{
		redirects: map[string]*Redirect{},
	}
}

func (r *mockRepository) Find(code string) (*Redirect, error) {
	redirect, ok := r.redirects[code]
	if !ok {
		return nil, errors.Wrap(ErrRedirectNotFound, "repository.Redirect.Find")
	}

	return redirect, nil
}

func (r *mockRepository) Store(redirect *Redirect) error {
	r.redirects[redirect.Code] = redirect

	return nil
}
