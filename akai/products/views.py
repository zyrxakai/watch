from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'blank_layout.html')

def list_products(request):
    """"_summary_
    returns product list page
    Args:
        request (_type_): _description_
        
    Returns:
        _type_: _description_
    """
    return render(request, 'product.html')

def details_product(request):
    return render(request, 'product_details.html')
