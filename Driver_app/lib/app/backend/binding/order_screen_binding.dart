/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Foodies Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import 'package:foodies_driver/app/controller/order_screen_controller.dart';
import 'package:get/get.dart';

class OrderScreenBinding extends Bindings {
  @override
  void dependencies() async {
    Get.lazyPut(
      () => OrderScreenController(parser: Get.find()),
    );
  }
}
