""" Global Flask Application Settings """

import os
import string
import random
from werkzeug.utils import import_string

class Config(object):
    # Flask settings
    DEBUG = os.environ.get('DEBUG', '')
    BASE_DIR = os.path.dirname(__file__)
    SECRET_KEY = os.environ.get('SECRET_KEY', ''.join(random.choices(string.ascii_uppercase + string.digits, k=32)))

    # Flask-SQLAlchemy settings
    DB_API = os.getenv('DB_DBAPI', 'mysql+mysqldb')
    DB_USER = os.environ['DB_USER']
    DB_PASS = os.environ['DB_PASS']
    DB_HOST = os.environ['DB_HOST']
    DB_PORT = os.environ['DB_PORT']
    DB_DATABASE = os.environ['DB_DATABASE']
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI',
        '{0}://{1}:{2}@{3}:{4}/{5}?charset=utf8mb4'.format(
            DB_API, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_DATABASE
        )
    )
    SQLALCHEMY_ENGINE_OPTIONS = {}

    # Atellix Catalog
    CATALOG_PROGRAM = os.environ['CATALOG_PROGRAM']
    CATALOG_SIGNER = os.environ['CATALOG_SIGNER']
    CATALOG_FEE_MINT = os.environ['CATALOG_FEE_MINT']
    CATALOG_FEE_ACCOUNT = os.environ['CATALOG_FEE_ACCOUNT']

class Development(Config):
    PRODUCTION = False

class Production(Config):
    PRODUCTION = True

class ConfigDict(dict):
    def from_object(self, obj):
        if isinstance(obj, str):
            obj = import_string(obj)
        for key in dir(obj):
            if key.isupper():
                self[key] = getattr(obj, key)

# Set `FLASK_CONFIG` env to 'Production' or 'Development' to set Config
flask_config = os.environ.get('FLASK_CONFIG', 'Development')
