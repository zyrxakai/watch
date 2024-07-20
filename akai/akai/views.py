from django.shortcuts import render

def home(request):
    # Your view logic here
    return render(request, 'blank_layout.html')
