# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth.routes import router as auth_router
from fruits import router as fruits_router
# from vegetables import router as vegetables_router
from config import load_config

app = FastAPI()
load_config()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(fruits_router, prefix="/fruits", tags=["fruits"])
# app.include_router(vegetables_router, prefix="/vegetables", tags=["vegetables"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Farm At Ease API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)