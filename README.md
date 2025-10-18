# Common Module

This module defines and manages the shared object model for the AtlasGrid platform. It provides tools for generating model code, accessing persistent stores, and working with the schema defined in `model/graph.yml`.

## Object Model

The object model is defined in `model/graph.yml`. This YAML file describes the schema for objects such as `Screen`, `Component`, and `Edge`. The model is used to generate Python and JavaScript code for working with these objects.

## Store Access

Use the `store.py` module to access persistent storage for your objects. The store can be configured to use either:

- **Devtest MongoDB**: For development and testing, using the `DevtestMongoStore()`
- **Local SQLite**: For local development, using the `LocalSqliteStore()`

Example usage:

```python
from .store import Store
db = Store()  # Uses Devtest MongoDB by default
```

## Environment Setup

1. Create a virtual environment:
	```bash
	python3 -m venv .venv
	source .venv/bin/activate
	```
2. Install dependencies:
	```bash
	pip install -r requirements.txt
	```

## Code Generation

To regenerate the model code after editing `model/graph.yml`, run:

```bash
python generate.py
```

This will update the files in `generated/model.py` and `generated/model.js` using the schema generator.

## Generated Files

- `generated/model.py`: Python classes for the object model
- `generated/model.js`: JavaScript classes for the object model

These files are auto-generated and should not be edited directly. Always update the schema and rerun the generator.

## Pushing Changes

After regenerating the model, commit and push the changes to version control:

```bash
git add generated/model.py generated/model.js model/graph.yml
git commit -m "Update object model and regenerate code"
git push
```

## Notes

- Do not edit files in `generated/` directly.
- Always update the schema and rerun the generator.
- Use the store module to access the database.

