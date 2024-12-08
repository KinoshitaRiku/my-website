# ---------- #
# Init
# ---------- #
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "local" {}
}

provider "aws" {
  region = "ap-northeast-1"
  default_tags {
    tags = {
      repogitory = "profile-website"
      directory  = "terraform"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  alias  = "us-east-1"
  default_tags {
    tags = {
      repogitory = "profile-website"
      directory  = "terraform"
    }
  }
}

# ---------- #
# Data
# ---------- #
data "aws_caller_identity" "current" {}

# ---------- #
# Route53
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

resource "aws_route53_record" "google_verification" {
  provider = aws.us-east-1
  zone_id  = var.zone_id
  name     = var.domain_name
  type     = "TXT"
  ttl      = 300
  records  = [var.google_site_verification]
}
