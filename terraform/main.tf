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
