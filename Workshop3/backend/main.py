from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

fruits=[]

@app.get("/fruits")
def get_fruits():
    return {"fruits": fruits}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    if item_id < 0 or item_id >= len(fruits):
        return {"error": "Item not found"}
    else:
        item = fruits[item_id]
        return {"item_id": item_id, "fruit": item, "query": q}
    



@app.post("/fruits")
def add_fruit(fruit: str):
    fruits.append(fruit)
    return {"message": f"{fruit} added to the list."}
