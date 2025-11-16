terraform {
  backend "azurerm" {
    resource_group_name  = "infra"
    storage_account_name = "ckstandardsa"
    container_name       = "tfstate"
    key                  = "techtonic.terraform.tfstate"
  }
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.32.0"
    }
  }
}
