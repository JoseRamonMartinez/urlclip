package json

import (
	"fmt"
	"microservice-shortener/shortener"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

var (
	now   = time.Now().UTC().Unix()
	input = &shortener.Redirect{
		Code:      "abc",
		URL:       "http://google.com",
		CreatedAt: 0,
	}
	inputRaw = []byte(fmt.Sprintf(
		`{"code":"%s","url":"%s","created_at":%d}`,
		input.Code,
		input.URL,
		input.CreatedAt,
	))
)

func TestDecode(t *testing.T) {
	redirect := &Redirect{}
	decode, err := redirect.Decode(inputRaw)
	assert.Nil(t, err)
	assert.Equal(t, input, decode)
}

func TestEncode(t *testing.T) {
	redirect := &Redirect{}
	raw, err := redirect.Encode(input)
	assert.Nil(t, err)
	assert.Equal(t, inputRaw, raw)
}
