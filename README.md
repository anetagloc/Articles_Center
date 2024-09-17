## How to Run the Project

### 1. **Clone the repository**

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. **System requirements**

Make sure you have the following software installed:

Ruby 3.3.3 (used by this project)
Bundler
PostgreSQL (or any other database you're using)

### 3. **Install dependencies**

Install the necessary gems using Bundler:
```bash
bundle install
```

### 4. **Database configuration**

1. Create the config/database.yml file using the following template:
```bash
default: &default
  adapter: postgresql
  encoding: unicode
  pool: 5
  username: your_database_user
  password: your_database_password
  host: localhost

development:
  <<: *default
  database: your_database_development

test:
  <<: *default
  database: your_database_test

production:
  <<: *default
  database: your_database_production
  username: your_production_db_user
  password: your_production_db_password
```

2. After configuring the database.yml file, create the database:

```bash
rails db:create
rails db:migrate
```

### 5. **Finally! Run the server**

Start the Rails server:
```bash
rails s
```

**Congratulations! The server will be accessible at: http://localhost:3000**