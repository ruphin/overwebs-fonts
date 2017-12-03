shell:
	docker run -it --rm -v $$PWD:/app ruphin/webdev bash
.PHONY: shell

publish:
	docker run -it --rm -v $$PWD:/app -v $$HOME/.gitconfig:/home/app/.gitconfig -v $$HOME/.ssh:/home/app/.ssh ruphin/webdev yarn publish
.PHONY: publish