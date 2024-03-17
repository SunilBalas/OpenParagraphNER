from django.http import JsonResponse
from .models import Paragraph, ExtractedInfo
from .utils import extract_information

def extract_paragraph_info(request):
    if request.method == 'POST':
        paragraph_content = request.POST.get('paragraph')
        paragraph = Paragraph.objects.create(content=paragraph_content)
        extract_info = extract_information(paragraph_content)
        
        for k, v in extract_info.items():
            ExtractedInfo.objects.create(
                paragraph=paragraph_content,
                key=k,
                value=v
            )
        return JsonResponse({ extract_info }, status=200)
        
    return JsonResponse({ "Bad Request" }, status=400)

def query_paragraph_info(request):
    if request.method == 'GET':
        query = request.GET.get('query')
        # Implement logic to interpret query and retrieve relevant information from the database
        return JsonResponse({"result": "Query result"}, status=200)
    return JsonResponse({"error": "Invalid request method"}, status=400)