const items = [
  {
    name: "Silk Fabric",
    category: "Raw Material",
    quantity: 50,
    unit: "meters",
    unitCost: 150
  },
  {
    name: "Sewing Thread",
    category: "Raw Material",
    quantity: 200,
    unit: "spools",
    unitCost: 25
  },
  {
    name: "Buttons",
    category: "Raw Material",
    quantity: 500,
    unit: "pcs",
    unitCost: 2
  },
  {
    name: "Kurta - Small",
    category: "Finished Product",
    quantity: 30,
    unit: "pcs",
    unitCost: 350
  },
  {
    name: "Kurta - Medium",
    category: "Finished Product",
    quantity: 45,
    unit: "pcs",
    unitCost: 350
  },
  {
    name: "Kurta - Large",
    category: "Finished Product",
    quantity: 25,
    unit: "pcs",
    unitCost: 350
  }
];

async function addInventory() {
  for (const item of items) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/inventory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        }
      );

      const result = await response.json();

      console.log(
        response.status,
        item.name,
        response.ok ? "Added successfully" : result.message
      );
    } catch (error) {
  console.error("Error adding", item.name, ":", error);
  break;    
}
    }
  }


addInventory();