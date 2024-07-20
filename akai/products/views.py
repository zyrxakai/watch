from django.shortcuts import render
from . models import Product
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

    product_list=Product.objects.all()
    context={'products': product_list}
    return render(request, 'product.html', context)

def details_product(request):
    return render(request, 'product_details.html')
