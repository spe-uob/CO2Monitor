import 'dart:ui';

import 'package:co2_monitor/api/types/location.dart';
import 'package:co2_monitor/widgets/graphs/graphItem.dart';
import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:co2_monitor/widgets/graphs/dataSet.dart';

import '../utils.dart';

// int currentCO2 = 600;

class LocationView extends StatefulWidget {
  final Location location;
  final bool animate;
  final bool test;

  LocationView(this.location, {Key key, this.animate, this.test})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _LocationViewState();
  }
}

class _LocationViewState extends State<LocationView> {
  Widget build(BuildContext context) {
    var data = widget.location.provideData();

    return LayoutBuilder(builder: (context, constraints) {
      return ListView(
          // mainAxisAlignment: MainAxisAlignment.center,
          // mainAxisSize: MainAxisSize.min,
          shrinkWrap: true,
          children: <Widget>[
            entryBuilder(
                'Current CO₂ Level:',
                data.createSeries()[0].data[0].levels,
                'ppm',
                context,
                constraints),
            Container(
                height: (constraints.maxHeight - 100),
                padding:
                    const EdgeInsets.symmetric(horizontal: 10, vertical: 0),
                // decoration: BoxDecoration(color: Color(0xffd7e5f7)),
                // constraints: BoxConstraints.tight(Size(350, 550)),
                alignment: Alignment.center,
                key: Key('Graph Container'),
                child: GraphItem<Location>(widget.location)),
            ListView(
              shrinkWrap: true,
              padding: const EdgeInsets.symmetric(horizontal: 0, vertical: 10),
              children: [
                entryBuilder(
                    '7-day Average:',
                    data.query(from: Duration(days: 7)).mean(),
                    'ppm',
                    context,
                    constraints),
                entryBuilder(
                    '24-hour Peak:',
                    data.query(from: Duration(hours: 7)).peak().levels,
                    'ppm',
                    context,
                    constraints),
                entryBuilder('Danger Level:', data.checkDanger(), '', context,
                    constraints)
              ],
            ),
            // ),
          ]);
    });
  }
}
