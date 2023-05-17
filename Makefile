install:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .	

fix:
		npx eslint . --fix

publish:
	npm publish --dry-run

run:
	gendiff  './fixtures/file1.yml' './fixtures/file2.yml' 

run2:
	gendiff  './fixtures/file1.json' './fixtures/file2.json' 

.PHONY: test
