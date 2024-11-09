{
		"inbounds": [],
		"outbounds": [
				{
						"mux": {
								"enabled": false
						},
						"protocol": "vless",
						"settings": {
								"vnext": [
										{
												"address": "wibmo.com",
												"port": 443,
												"users": [
														{
																"encryption": "none",
																"flow": "",
																"id": "90cd4a77-141a-43c9-991b-08263cfe9c40",
																"level": 8
														}
												]
										}
								]
						},
						"streamSettings": {
								"network": "ws",
								"security": "tls",
								"tlsSettings": {
										"allowInsecure": true,
										"serverName": "dev.dk-vipop.dns-dynamic.net"
								},
								"wsSettings": {
										"headers": {
												"Host": "dev.dk-vipop.dns-dynamic.net"
										},
										"path": "/Deepu\u003d14.143.95.96"
								}
						},
						"tag": "VLESS"
				}
		],
		"policy": {
				"levels": {
						"8": {
								"connIdle": 300,
								"downlinkOnly": 1,
								"handshake": 4,
								"uplinkOnly": 1
						}
				}
		}
}
