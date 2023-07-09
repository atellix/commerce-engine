{
    "column": [
        {
            "default": "none",
            "default_value": "",
            "indexes": [
                "ix_backend_id_1"
            ],
            "length": "default",
            "length_specify": 255,
            "name": "backend_id",
            "nullable": false,
            "type": "record"
        },
        {
            "default": "null",
            "default_value": "",
            "indexes": [
                "ix_entry_key_1"
            ],
            "length": "specify",
            "length_specify": "10",
            "name": "entry_key",
            "nullable": "",
            "type": "binary"
        },
        {
            "default": "null",
            "default_value": "",
            "indexes": [
                "ix_backend_id_1",
                "ix_user_id_1"
            ],
            "length": "specify",
            "length_specify": "64",
            "name": "external_id",
            "nullable": true,
            "type": "string"
        },
        {
            "default": "none",
            "default_value": "",
            "indexes": [
                "ix_entry_uri_1",
                "ix_external_uri_1"
            ],
            "length": "specify",
            "length_specify": "128",
            "name": "external_uri",
            "nullable": false,
            "type": "string"
        },
        {
            "default": "none",
            "default_value": "",
            "indexes": [
                "ix_record_id_1"
            ],
            "length": "default",
            "length_specify": 255,
            "name": "record_id",
            "nullable": false,
            "type": "record"
        },
        {
            "default": "null",
            "default_value": "",
            "length": "specify",
            "length_specify": "64",
            "name": "slug",
            "nullable": true,
            "type": "string"
        },
        {
            "default": "none",
            "default_value": "",
            "indexes": [
                "ix_type_id_1"
            ],
            "length": "default",
            "length_specify": 255,
            "name": "type_id",
            "nullable": false,
            "type": "record"
        },
        {
            "default": "none",
            "default_value": "",
            "indexes": [
                "ix_user_id_1"
            ],
            "length": "default",
            "length_specify": 255,
            "name": "user_id",
            "nullable": false,
            "type": "record"
        }
    ],
    "index": [
        {
            "columns": [
                {
                    "column": "backend_id"
                },
                {
                    "column": "external_id"
                }
            ],
            "name": "ix_backend_id_1",
            "type": "unique"
        },
        {
            "columns": [
                {
                    "column": "entry_key"
                }
            ],
            "name": "ix_entry_key_1",
            "type": "unique"
        },
        {
            "columns": [
                {
                    "column": "external_uri"
                }
            ],
            "name": "ix_entry_uri_1",
            "type": "unique"
        },
        {
            "columns": [
                {
                    "column": "external_uri"
                }
            ],
            "name": "ix_external_uri_1",
            "type": "unique"
        },
        {
            "columns": [
                {
                    "column": "type_id"
                }
            ],
            "name": "ix_type_id_1",
            "type": "index"
        },
        {
            "columns": [
                {
                    "column": "user_id"
                },
                {
                    "column": "external_id"
                }
            ],
            "name": "ix_user_id_1",
            "type": "index"
        },
        {
            "columns": [
                {
                    "column": "record_id"
                }
            ],
            "name": "ix_record_id_1",
            "type": "index"
        }
    ],
    "table": "entry"
}