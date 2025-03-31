import { z } from 'zod';
import plotOptionsKeys from './plot-options';
import seriesTypes from './series';

// A helper for nested objects that may contain additional (unspecified) properties.
const LooseObject = z.object({}).passthrough();

/**
 * Highcharts Chart Configuration Options
 *
 * This schema defines the available configuration options for a Highcharts chart,
 * as described in the official API reference:
 * https://api.highcharts.com/highcharts/chart
 */
export const ChartOptionsSchema = z.object({
  /**
   * backgroundColor
   * ---------------
   * Sets the background color for the entire chart.
   * Can be a simple color string or an object defining a gradient.
   * Defaults to "#ffffff".
   */
  backgroundColor: z
    .union([z.string(), LooseObject])
    .optional()
    .describe(
      'Sets the background color for the entire chart. Can be a simple color string or an object defining a gradient. Defaults to "#ffffff".',
    ),

  /**
   * borderColor
   * -----------
   * Specifies the color of the outer chart border.
   * Defaults to "#334eff".
   */
  borderColor: z
    .string()
    .optional()
    .describe(
      'Specifies the color of the outer chart border. Defaults to "#334eff".',
    ),

  /**
   * borderRadius
   * ------------
   * Defines the corner radius of the chart border. Use null to disable rounded corners.
   * Defaults to null.
   */
  borderRadius: z
    .number()
    .nullable()
    .optional()
    .describe(
      'Defines the corner radius of the chart border. Use null to disable rounded corners. Defaults to null.',
    ),

  /**
   * borderWidth
   * -----------
   * Sets the width of the chart's outer border in pixels.
   * Defaults to 0.
   */
  borderWidth: z
    .number()
    .optional()
    .describe(
      "Sets the width of the chart's outer border in pixels. Defaults to 0.",
    ),

  /**
   * height
   * ------
   * Sets the height of the chart in pixels. Use null to let Highcharts compute
   * the default height.
   * Defaults to null.
   */
  height: z
    .number()
    .nullable()
    .optional()
    .describe(
      'Sets the height of the chart in pixels. Use null to let Highcharts compute the default height. Defaults to null.',
    ),

  /**
   * ignoreHiddenSeries
   * ------------------
   * When true, hidden series are ignored in calculations (such as axes scaling).
   * Defaults to true.
   */
  ignoreHiddenSeries: z
    .boolean()
    .optional()
    .describe(
      'When true, hidden series are ignored in calculations (such as axes scaling). Defaults to true.',
    ),

  /**
   * inverted
   * --------
   * Whether to invert the axes so that the x axis is vertical and y axis is horizontal. When true, the x axis is reversed by default.
   * If a bar series is present in the chart, it will be inverted automatically. Inverting the chart doesn't have an effect if there are no cartesian series in the chart.
   *
   * Defaults to false.
   */
  inverted: z
    .boolean()
    .optional()
    .describe(
      "Whether to invert the axes so that the x axis is vertical and y axis is horizontal. When true, the x axis is reversed by default. If a bar series is present in the chart, it will be inverted automatically. Inverting the chart doesn't have an effect if there are no cartesian series in the chart. Defaults to false.",
    ),

  /**
   * margin
   * ------
   * The margin between the outer edge of the chart and the plot area. The numbers in the array designate top, right, bottom and left respectively. Use the options marginTop, marginRight, marginBottom and marginLeft for shorthand setting of one option.
   *
   * By default there is no margin. The actual space is dynamically calculated from the offset of axis labels, axis title, title, subtitle and legend in addition to the spacingTop, spacingRight, spacingBottom and spacingLeft options.
   *
   * Defaults to undefined.
   */
  margin: z
    .tuple([z.number(), z.number(), z.number(), z.number()])
    .nullable()
    .optional()
    .describe(
      'The margin between the outer edge of the chart and the plot area. The numbers in the array designate top, right, bottom and left respectively. Use the options marginTop, marginRight, marginBottom and marginLeft for shorthand setting of one option. By default there is no margin. The actual space is dynamically calculated from the offset of axis labels, axis title, title, subtitle and legend in addition to the spacingTop, spacingRight, spacingBottom and spacingLeft options. Defaults to undefined.',
    ),

  /**
   * marginBottom
   * ------------
   * The margin between the bottom outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingBottom.
   * Defaults to undefined.
   */
  marginBottom: z
    .number()
    .nullable()
    .optional()
    .describe(
      'The margin between the bottom outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingBottom. Defaults to undefined.',
    ),

  /**
   * marginLeft
   * ----------
   * The margin between the left outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingLeft.
   * Defaults to undefined.
   */
  marginLeft: z
    .number()
    .nullable()
    .optional()
    .describe(
      'The margin between the left outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingLeft. Defaults to undefined.',
    ),

  /**
   * marginRight
   * -----------
   * The margin between the right outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingRight.
   * Defaults to undefined.
   */
  marginRight: z
    .number()
    .nullable()
    .optional()
    .describe(
      'The margin between the right outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingRight. Defaults to undefined.',
    ),

  /**
   * marginTop
   * ---------
   * The margin between the top outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingTop.
   * Defaults to undefined.
   */
  marginTop: z
    .number()
    .nullable()
    .optional()
    .describe(
      'The margin between the top outer edge of the chart and the plot area. Use this to set a fixed pixel value for the margin as opposed to the default dynamic margin. See also spacingTop. Defaults to undefined.',
    ),

  /**
   * plotBackgroundColor
   * -------------------
   * The background color or gradient for the plot area.
   *
   * Defaults to undefined.
   */
  plotBackgroundColor: z
    .union([z.string(), LooseObject])
    .nullable()
    .optional()
    .describe(
      'The background color or gradient for the plot area. Defaults to undefined.',
    ),

  /**
   * plotBorderColor
   * -----------------
   * Specifies the color of the border around the plot area.
   * Defaults to "#cccccc".
   */
  plotBorderColor: z
    .string()
    .optional()
    .describe(
      'Specifies the color of the border around the plot area. Defaults to "#cccccc".',
    ),

  /**
   * plotBorderWidth
   * ----------------
   * Sets the width of the border around the plot area in pixels.
   * Defaults to 0.
   */
  plotBorderWidth: z
    .number()
    .optional()
    .describe(
      'Sets the width of the border around the plot area in pixels. Defaults to 0.',
    ),

  /**
   * polar
   * -----
   * When true, cartesian charts like line, spline, area and column are transformed into the polar coordinate system. This produces polar charts, also known as radar charts.
   *
   * Defaults to false.
   */
  polar: z
    .boolean()
    .optional()
    .describe(
      'When true, cartesian charts like line, spline, area and column are transformed into the polar coordinate system. This produces polar charts, also known as radar charts. Defaults to false.',
    ),

  /**
   * selectionMarkerFill
   * ---------------------
   * The fill color for the marker used during selection (e.g., when zooming in).
   * Defaults to "rgba(51,92,173,0.25)".
   */
  selectionMarkerFill: z
    .string()
    .optional()
    .describe(
      'The fill color for the marker used during selection (e.g., when zooming in). Defaults to "rgba(51,92,173,0.25)".',
    ),

  /**
   * spacing
   * -------
   * An array of four numbers that sets the spacing around the chart in pixels,
   * in the order: [top, right, bottom, left].
   * Defaults to [10, 10, 15, 10].
   */
  spacing: z
    .tuple([z.number(), z.number(), z.number(), z.number()])
    .optional()
    .describe(
      'An array of four numbers that sets the spacing around the chart in pixels, in the order: [top, right, bottom, left]. Defaults to [10, 10, 15, 10].',
    ),

  /**
   * spacingBottom
   * -------------
   * Sets the bottom spacing of the chart in pixels.
   * Defaults to 15.
   */
  spacingBottom: z
    .number()
    .optional()
    .describe(
      'Sets the bottom spacing of the chart in pixels. Defaults to 15.',
    ),

  /**
   * spacingLeft
   * -----------
   * Sets the left spacing of the chart in pixels.
   * Defaults to 10.
   */
  spacingLeft: z
    .number()
    .optional()
    .describe('Sets the left spacing of the chart in pixels. Defaults to 10.'),

  /**
   * spacingRight
   * ------------
   * Sets the right spacing of the chart in pixels.
   * Defaults to 10.
   */
  spacingRight: z
    .number()
    .optional()
    .describe('Sets the right spacing of the chart in pixels. Defaults to 10.'),

  /**
   * spacingTop
   * ----------
   * Sets the top spacing of the chart in pixels.
   * Defaults to 10.
   */
  spacingTop: z
    .number()
    .optional()
    .describe('Sets the top spacing of the chart in pixels. Defaults to 10.'),

  /**
   * type
   * ----
   * The default series type for the chart. Can be any of the chart types listed under plotOptions and series or can be a series provided by an additional module.
   *
   * In TypeScript this option has no effect in sense of typing and instead the type option must always be set in the series.
   *
   * Defaults to line.
   */
  type: z
    .enum(
      plotOptionsKeys.filter((type) => seriesTypes.includes(type)) as [
        string,
        ...string[],
      ],
    )
    .nullable()
    .optional()
    .describe(
      'The default series type for the chart. Can be any of the chart types listed under plotOptions and series or can be a series provided by an additional module. In TypeScript this option has no effect in sense of typing and instead the type option must always be set in the series. Defaults to line.',
    ),

  /**
   * width
   * -----
   * Sets the width of the chart in pixels. Use null to let Highcharts determine
   * the optimal width automatically.
   * Defaults to null.
   */
  width: z
    .number()
    .nullable()
    .optional()
    .describe(
      'Sets the width of the chart in pixels. Use null to let Highcharts determine the optimal width automatically.',
    ),
});

// Extract the TypeScript type from the schema.
export type LLMChartOptions = z.infer<typeof ChartOptionsSchema>;
