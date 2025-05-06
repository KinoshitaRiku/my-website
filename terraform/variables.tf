# ---------- #
# Route53 - rkkinoshita.com
# ---------- #
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

# # ---------- #
# # Route53 - rk-sys.com
# # ---------- #
# variable "rk_sys_zone_id" {
#   type = string
# }

# variable "rk_sys_domain_name" {
#   type = string
#   default = "rk-sys.com"
# }

# variable "rk_sys_github_pages_cname" {
#   type = string
# }

# variable "rk_sys_google_site_verification" {
#   type = string
# }
