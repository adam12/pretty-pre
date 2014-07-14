build: lint components index.js
	@component build --dev

dist: lint components index.js
	@component build --standalone prettyPre -o dist -n pretty-pre

components: component.json
	@component install --dev

clean:
	rm -rf components template.js build

lint:
	@jshint index.js

.PHONY: clean lint
