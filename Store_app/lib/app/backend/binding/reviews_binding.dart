/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Foodies Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import 'package:get/get.dart';
import 'package:foodies_vendors/app/controller/reviews_controller.dart';

class ReviewsBinding extends Bindings {
  @override
  void dependencies() async {
    Get.lazyPut(
      () => ReviewsController(parser: Get.find()),
    );
  }
}
