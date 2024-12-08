variable "zone_id" {
  description = "Route53 zone id"
  type        = string
  default     = ""
}

variable "domain_name" {
  description = "The root domain name"
  type        = string
  default     = ""
}

variable "github_pages_cname" {
  description = "GitHub Pages CNAME target"
  type        = string
  default     = ""
}

variable "google_site_verification" {
  description = "Google site verification token"
  type        = string
  default     = ""
}
