-- Имя и id покупателя с самой большой суммой оплаченных покупок;
SELECT customers.name,
    customers.id,
    SUM(
        CASE
          WHEN customers.currency = 'EUR' THEN orders.total * 0.87
          ELSE orders.total
        END
    ) as total_USD
  FROM customers
    LEFT JOIN orders
    ON customers.id = orders.customer_id
  WHERE orders.paid = 1
  GROUP BY customers.id
  ORDER BY total_USD DESC
  LIMIT 1;
