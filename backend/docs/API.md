# API Documentation

This API is built using Hono for Cloudflare Workers, providing endpoints for blog RSS feeds, post listings, individual posts, and a "drip" feature for managing messages in a database.

## Authentication

Some endpoints require Bearer token authentication. Include the header:
- `Authorization: Bearer <TOKEN>`

The token is sourced from the `TOKEN` environment variable.

## Endpoints

### GET /rss.xml

Retrieves the RSS feed from the blog bucket.

**Authentication:** None

**Query Parameters:** None

**Response:**
- **200 OK**: RSS XML content with `Content-Type: application/rss+xml` and `ETag` header
- **404 Not Found**: Object not found

### GET /posts

Fetches a list of blog posts from the posts.json file.

**Authentication:** None

**Query Parameters:** None

**Response:**
- **200 OK**: JSON object with `data` array containing posts. Each post has `slug`, `published`, `title`. Includes `ETag` header.
- **404 Not Found**: Object not found

### GET /posts/:slug

Retrieves a specific blog post by slug.

**Authentication:** None

**Path Parameters:**
- `slug` (string): The post slug

**Query Parameters:** None

**Response:**
- **200 OK**: JSON object with `data` containing the post details. Includes `ETag` header.
- **404 Not Found**: Object not found

### POST /drip

Creates or updates a drip message.

**Authentication:** Bearer token required

**Headers:**
- `Authorization: Bearer <TOKEN>`
- `Content-Type: application/json`

**Query Parameters:** None

**Request Body:**
- `message` (string, required): The message text
- `id` (integer, optional): For updates, the drip ID

**Response:**
- **201 Created**: JSON with success message ("drip created" or "drip updated")
- **400 Bad Request**: Invalid headers, missing message, or invalid update body
- **500 Internal Server Error**: Something went wrong

### GET /drip

Retrieves the last 10 drip messages, ordered by creation date descending.

**Authentication:** None

**Query Parameters:** None

**Response:**
- **200 OK**: JSON object with `data` array of drip records
- **400 Bad Request**: Something went wrong

### DELETE /drip/:id

Deletes a drip message by ID.

**Authentication:** Bearer token required

**Path Parameters:**
- `id` (integer): The drip ID

**Headers:**
- `Authorization: Bearer <TOKEN>`

**Query Parameters:** None

**Response:**
- **201 Created**: JSON with success message ("drip deleted")
- **400 Bad Request**: Something went wrong