from typing import Dict, Any

def serialize_doc(doc: Dict[str, Any]) -> Dict[str, Any]:
    """Convert MongoDB document to JSON-serializable format"""
    if doc is None:
        return None
    
    # Convert _id to id
    if "_id" in doc:
        doc["id"] = str(doc["_id"])
        del doc["_id"]
    
    # Handle class field
    if "class_field" in doc:
        doc["class"] = doc["class_field"]
        del doc["class_field"]
    
    # Handle downloadUrl for study materials
    if "fileUrl" in doc:
        doc["downloadUrl"] = doc["fileUrl"]
    
    return doc

def serialize_docs(docs: list) -> list:
    """Convert list of MongoDB documents to JSON-serializable format"""
    return [serialize_doc(doc) for doc in docs]
