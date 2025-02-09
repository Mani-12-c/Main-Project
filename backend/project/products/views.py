from rest_framework import viewsets, permissions
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]  # Allow all users to view products

# class OrderViewSet(viewsets.ModelViewSet):
#     serializer_class = OrderSerializer

#     def get_queryset(self):
#         user = self.request.user
#         if user.is_staff:  # Admins can see all orders
#             return Order.objects.all()
#         return Order.objects.filter(user=user)  # Users see only their orders

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)  # Set the user automatically

#     def get_permissions(self):
#         if self.action in ['list', 'retrieve', 'create']:  # Restrict access
#             return [IsAuthenticated()]
#         elif self.action in ['update', 'partial_update', 'destroy']:
#             return [IsAdminUser()]
#         return super().get_permissions()

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()  # Add this line to fix the error
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:  
            return Order.objects.all()
        return Order.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)