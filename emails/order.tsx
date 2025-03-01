export const OrderEmailTemplate = (orderDetails: any) => {
  return `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Order Received</h2>
        <p><strong>Order ID:</strong> ${orderDetails?._id}</p>
        <p><strong>Customer Name:</strong> ${orderDetails?.shippingAddress?.fullName}</p>
        <p><strong>Email:</strong> ${orderDetails?.customerEmail || 'N/A'}</p>
        <p><strong>Total Amount:</strong> $${orderDetails?.totalPrice}</p>
        <h3>Items Ordered:</h3>
        <ul>
          ${orderDetails?.items
            ?.map(
              (item: any) => `
            <li>
              <strong>${item.name}</strong> (Qty: ${item?.quantity}) - $${item?.price}<br>
              <img src="${item?.image}" alt="${item?.name}" width="100" />
            </li>
          `
            )
            .join('')}
        </ul>
        <p><strong>Shipping Address:</strong></p>
        <p>
          ${orderDetails?.shippingAddress?.street},<br>
          ${orderDetails?.shippingAddress?.city}, ${orderDetails?.shippingAddress?.province}, ${orderDetails?.shippingAddress?.postalCode},<br>
          ${orderDetails?.shippingAddress?.country}<br>
          <strong>Phone:</strong> ${orderDetails?.shippingAddress?.phone}
        </p>
        <p><strong>Expected Delivery Date:</strong> ${new Date(orderDetails?.expectedDeliveryDate).toDateString()}</p>
        <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>
      </div>
    `
}
