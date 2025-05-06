# ---------- #
# Route53 - rkkinoshita.com
# ---------- #
resource "aws_route53_record" "www" {
  provider = aws.us-east-1
  zone_id  = var.zone_id
  name     = "www.${var.domain_name}"
  type     = "CNAME"
  ttl      = 300
  records  = [var.github_pages_cname]
}

resource "aws_route53_record" "root_a_record" {
  provider = aws.us-east-1
  zone_id  = var.zone_id
  name     = var.domain_name
  type     = "A"
  ttl      = 300
  records = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153"
  ]
}

# Google Search Console や Google Workspaceなどで
# 「このドメインは自分が所有しています」という証明をするために使います。
resource "aws_route53_record" "google_verification" {
  provider = aws.us-east-1
  zone_id  = var.zone_id
  name     = var.domain_name
  type     = "TXT"
  ttl      = 300
  records  = [var.google_site_verification]
}

# # ---------- #
# # Route53 - rk-sys.com
# # ---------- #
# resource "aws_route53_record" "rk_sys_www" {
#   provider = aws.us-east-1
#   zone_id  = var.rk_sys_zone_id
#   name     = "www.${var.rk_sys_domain_name}"
#   type     = "CNAME"
#   ttl      = 300
#   records  = []
# }

# resource "aws_route53_record" "rk_sys_root_a_record" {
#   provider = aws.us-east-1
#   zone_id  = var.rk_sys_zone_id
#   name     = var.rk_sys_domain_name
#   type     = "A"
#   ttl      = 300
#   records = [
#     "185.199.108.153",
#     "185.199.109.153",
#     "185.199.110.153",
#     "185.199.111.153"
#   ]
# }
