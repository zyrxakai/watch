from django.shortcuts import render


def home(request):
    # Your view logic here
    return render(request, 'blank_layout.html')

def pay(request):
    return render(request, 'pay.html')

def account(request):
    return render(request, 'account.html')

def about(request):
    return render(request, 'about.html')

def prod(request):
    return render(request, 'product.html')
