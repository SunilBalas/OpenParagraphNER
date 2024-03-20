from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Paragraph, ExtractedInfo
from .utils import extract_information

@api_view(['POST'])
def extract_paragraph_info(request):
    if request.method == 'POST':
        paragraph_content = request.data.get('paragraph')  # Use request.data instead of request.POST
        if not paragraph_content:
            return Response({"error": "No paragraph content provided"}, status=400)
        
        try:
            paragraph = Paragraph.objects.create(content=paragraph_content)
            extract_info = extract_information(paragraph_content)
            
            for items in extract_info:
                key, value = items
                ExtractedInfo.objects.create(
                    paragraph=paragraph,
                    key=key,
                    value=value
                )
                
            return Response({ "paragraph": paragraph_content, "extract_info": extract_info }, status=200)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
        
    return Response({"error": "Invalid request method"}, status=405)

@api_view(['GET'])
def query_paragraph_info(request):
    if request.method == 'GET':
        query = request.GET.get('query')
        # Implement logic to interpret query and retrieve relevant information from the database
        return Response({"result": "Query result"}, status=200)
    return Response({"error": "Invalid request method"}, status=405)
