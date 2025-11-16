resource "azurerm_cosmosdb_account" "cosmos-account" {
  location            = azurerm_resource_group.rg.location
  name                = "techtonic-cosmosdb"
  offer_type          = "Standard"
  kind = "MongoDB"
  resource_group_name = azurerm_resource_group.rg.name
  mongo_server_version = "7.0"

  capabilities {
    name = "EnableMongo"
  }
  
  capabilities {
    name = "EnableServerless"
  }

  consistency_policy {
    consistency_level = "Strong"
  }
  
  geo_location {
    failover_priority = 0
    location          = "uksouth"
  }
}