CREATE TABLE articles (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(5000) NOT NULL,
    price INT NOT NULL,
    discount INT NOT NULL,
    img VARCHAR(1000) NOT NULL,
    categories VARCHAR(100)[] NOT NULL,
    timestamps DATE DEFAULT CURRENT DATE
);

INSERT INTO articles (
    name, description, price, discount, img, categories
) VALUES (
    'headphones', 'description', 20, 0, 'https://i1.rozetka.ua/goods/10462237/panasonic_rp_hje125e_k_images_10462237970.jpg', ARRAY['headphones']
);
INSERT INTO articles (
    name, description, price, discount, img, categories
) VALUES (
    'headphones', 'description', 20, 0, 'https://i1.rozetka.ua/goods/10462237/panasonic_rp_hje125e_k_images_10462237970.jpg', ARRAY['headphones']
);
INSERT INTO articles (
    name, description, price, discount, img, categories
) VALUES (
    'headphones', 'description', 20, 0, 'https://i1.rozetka.ua/goods/10462237/panasonic_rp_hje125e_k_images_10462237970.jpg', ARRAY['headphones']
);